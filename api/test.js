export default function handler(request, response) {
  response.status(200).json({
    name: "howoo",
    age: 6,
    isCute: true,
  });
}
