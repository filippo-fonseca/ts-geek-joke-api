import axios from "axios";

/**
 * Incredibly complex. This is a next level function that returns a nerdy quote.
 * @return A random quote from the Geek Quote API.
 */
export async function getQuote() {
  try {
    const response = await axios.get("https://geek-jokes.sameerkumar.website/api");
    return response.data;
  } catch (error) {
    return error;
  }
}
