import express from "express";

const routes = express.Router();

routes.post("/shopping-cards", async (req, res) => {
  const message = {
    user: { id: 1, name: "Natura Cosmeticos" },
    product: "Kayak",
    quantity: 10
  };

  await req.producer.send("purchase-record", JSON.stringify(message));

  return res.json({ ok: true });
});

export default routes;
