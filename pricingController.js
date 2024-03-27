
const express = require('express');
const router = express.Router();
const { Pricing, Organization, Item } = require('./models/models'); 

router.post('/calculate-price', async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const pricingData = await Pricing.findOne({
      where: {
        organization_id,
        zone
      },
      include: [
        {
          model: Organization,
          attributes: ['name']
        },
        {
          model: Item,
          where: {
            type: item_type
          },
          attributes: ['description']
        }
      ]
    });
    if (!pricingData) {
      return res.status(404).json({ error: 'Pricing data not found for the provided parameters' });
    }
let totalPrice = parseInt(pricingData.fix_price);

if (parseInt(total_distance) > pricingData.base_distance_in_km) {
  const additionalDistancePrice = (parseInt(total_distance) - pricingData.base_distance_in_km) * pricingData.km_price;
  totalPrice += additionalDistancePrice;
}
    return res.json({ total_price: totalPrice }); 
  } catch (error) {
    console.error('Error calculating price:', error);
    return res.status(500).json({ error: 'An error occurred while calculating the price' });
  }
});
module.exports = router;
