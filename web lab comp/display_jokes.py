import json

# Function to fetch and display jokes
def fetch_and_display_jokes():
    try:
        with open('jokes.json', 'r') as file:
            jokes = json.load(file)

        print("Here are some jokes for you:")
        for index, joke_entry in enumerate(jokes, start=1):
            print(f"{index}. {joke_entry['joke']}")

    except FileNotFoundError:
        print("The 'jokes.json' file was not found.")

if __name__ == "__main__":
    fetch_and_display_jokes()
