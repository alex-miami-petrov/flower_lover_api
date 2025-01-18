import { parseFilterParams } from '../utils/parseFilterParams.js';

export const filterFlowerCtrl = async (req, res) => {
  const { price, flowers, recipient, occasion, style } = parseFilterParams(
    req.query,
  );

  try {
    const query = {};

    if (price.length) query.price = { $in: price };
    if (flowers.length) query.name = { $in: flowers };
    if (recipient.length) query.recipient = { $in: recipient };
    if (occasion.length) query.occasion = { $in: occasion };
    if (style.length) query.style = { $in: style };

    const flowersList = await Flower.find(query);
    res.status(200).json({
      status: 200,
      message: 'Successfully found flowers!',
      data: flowersList,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};
