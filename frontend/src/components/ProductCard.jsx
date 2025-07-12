import {Button, Dialog, Flex, TextArea, TextField} from "@radix-ui/themes";
import { PenBox, Trash2 } from "lucide-react";
import { useState } from "react";


function ProductCard({ key, product, setShowModal, setProductId }) {
  const [updatedProduct, setUpdatedProduct ] = useState(product);

function handleDeleteProduct(id){
    setShowModal(true);
    setProductId(id);

}

async function updatedProductById(id){
  const response = await fetch(`http://localhost:5000/api/products/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({
      name: updatedProduct.name,
      price: parseFloat(updatedProduct.price),
      stock: parseFloat(updatedProduct.stock),
      description: updatedProduct.description,
      imageUrl: updatedProduct.imageUrl
    })
  })

  if(response.ok){
    const data = await response.json()
    console.log(data)
    console.log("Product updated successfully")
  }

}

  return (
      <div
        key={key}
        className="border border-gray-500/25
         bg-gray-950 rounded shadow-lg w-full"
      >
        <div>
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="overflow-hidden rounded-t w-full h-100 rounded"
          />
          <div className="p-1">
            <h4>{product?.name}</h4>
            <p>${product?.price}</p>
            <p className="line-clamp-3">{product?.description}</p>
            <div className="flex space-x-2 mt-2">
             <Dialog.Root>
              <Dialog.Trigger>
                <PenBox
                  size={18}
                  className="p-1 bg-blue-400 text-black rounded"
                />
              </Dialog.Trigger>

              <Dialog.Content maxWidth="400px">
                <Dialog.Title>Edit Product</Dialog.Title>
                <Flex direction="column" gap="3">
                  <TextField.Root
                    defaultValue={product?.name}
                    placeholder="Update product name"
                    variant="soft"
                    size={1}
                    value={updatedProduct.name}
                    onChange={(e)=>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />

                  <TextField.Root
                    placeholder="Update product price"
                    size={1}
                    type="float"
                    variant="soft"
                    min={0}
                    value={updatedProduct.price}
                      onChange={(e)=>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                    
                  />

                  <TextField.Root
                    placeholder="Update product stock"
                    size={1}
                    type="number"
                    variant="soft"
                    min={0}
                    value={updatedProduct.stock}
                      onChange={(e)=>
                      setUpdatedProduct({
                        ...updatedProduct,
                        stock: e.target.value,
                      })
                    }
                  />

                  <TextField.Root
                    placeholder="Update product image URL"
                    size="1"
                    type="url"
                    variant="soft"
                    value={updatedProduct.imageUrl}
                      onChange={(e)=>
                      setUpdatedProduct({
                        ...updatedProduct,
                        imageUrl: e.target.value,
                      })
                    }
                  />

                  <TextArea
                    size="3"
                    placeholder="Update product description…"
                    variant="soft"
                    rows={5}
                    value={updatedProduct.description}
                      onChange={(e)=>
                      setUpdatedProduct({
                        ...updatedProduct,
                        description: e.target.value,
                      })
                    }
                  />
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button onClick={() => updatedProductById(product._id)}>Update</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

                <Trash2
                  size={18}
                  className="p-1 bg-red-300 text-black rounded"
                  onClick={() => handleDeleteProduct(product?._id)}
                />
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductCard;
