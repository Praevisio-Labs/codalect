"""
chatbot.py — Interactive RAG chatbot.
Retrieves relevant document chunks before each answer.
"""

import os
from dotenv import load_dotenv
from pinecone import Pinecone
import openai
from retrieve import retrieve

load_dotenv()

PINECONE_INDEX = "rag-chatbot"
CHAT_MODEL = "gpt-4o-mini"


def build_prompt(query: str, context_chunks: list[dict]) -> str:
    """
    Format the retrieved chunks into a context block and return a system prompt
    that instructs the model to answer only from the provided context.

    Each chunk dict has 'text' and 'source' keys (from the Pinecone metadata).
    """
    # TODO: Build a context string by joining the text from each chunk.
    # Include the source filename so the model can cite it.
    # Format example:
    #   [Source: handbook.txt]
    #   <chunk text>
    #
    #   [Source: faq.txt]
    #   <chunk text>
    #
    # Then return a system prompt that:
    # 1. Tells the model to answer based only on the provided context.
    # 2. Instructs it to say "I don't know" if the answer isn't in the context.
    # 3. Includes the formatted context block.
    raise NotImplementedError


def main():
    pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
    index = pc.Index(PINECONE_INDEX)
    client = openai.OpenAI()

    print("RAG Chatbot ready. Type 'quit' to exit.\n")

    # Conversation history — we keep it so the model has context across turns.
    # Note: we rebuild the system prompt on every turn with fresh retrieved context.
    history: list[dict] = []

    while True:
        query = input("You: ").strip()
        if query.lower() in ("quit", "exit"):
            break
        if not query:
            continue

        # TODO: Step 1 — Retrieve relevant chunks for the query.
        # Call retrieve(query, index, k=4) from retrieve.py.

        # TODO: Step 2 — Build the system prompt with the retrieved context.
        # Call build_prompt(query, chunks).

        # TODO: Step 3 — Call the OpenAI chat completions API.
        # Use the system prompt from Step 2.
        # Pass the conversation history as the messages array.
        # Append the user's query to history before the call,
        # and append the assistant's response after.

        # TODO: Step 4 — Print the assistant's response and continue the loop.

        print()  # blank line between turns


if __name__ == "__main__":
    main()
