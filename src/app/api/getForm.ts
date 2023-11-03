export async function getForm() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}form/order`);
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.log(error);
  }
}
