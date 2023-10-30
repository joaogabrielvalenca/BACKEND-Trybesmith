import express from 'express';
import createProduct from './database/service/product.service';

const app = express();

app.use(express.json());

app.post('/products', async (req: Request, res: Response) => {
  try {
    const { name, price, orderId } = req.body;
    const createdProduct = await createProduct(name, price, orderId);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
