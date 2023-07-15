import sys
from bs4 import BeautifulSoup

# Replace 'IndexOfGames.html' with the filename of your local HTML file
file_name = 'IndexOfGames.html'

def parse_webpage():
    try:
        with open(file_name, 'r', encoding='utf-8') as file:
            content = file.read()
        soup = BeautifulSoup(content, 'html.parser')
        return soup
    except FileNotFoundError as e:
        print(f"Error reading the file: {e}")
        return None

def modify_box(soup, box_selector, title, description, button_link, button_text):
    # Find the box using the provided selector
    box = soup.select_one(box_selector)
    if box:
        # Update the box elements with the provided content
        box.select_one(".box-title").string = title
        box.select_one(".box-description").string = description
        box.select_one(".box-button")['href'] = button_link
        box.select_one(".box-button").string = button_text
    else:
        print(f"Box not found with selector: '{box_selector}'")

if __name__ == "__main__":
    if len(sys.argv) < 6:
        print("Usage: python script.py modify <box_selector> <title> <description> <button_link> <button_text>")
        print("       python script.py add <title> <description> <button_link> <button_text>")
    else:
        command = sys.argv[1]

        if command == "add":
            title = sys.argv[2]
            description = sys.argv[3]
            button_link = sys.argv[4]
            button_text = sys.argv[5]

            soup = parse_webpage()
            if soup:
                # Example usage to add a new box
                add_new_box(
                    soup,
                    title=title,
                    description=description,
                    button_link=button_link,
                    button_text=button_text
                )

                # Save the modified soup back to the local file
                with open("modified_IndexOfGames.html", "w", encoding="utf-8") as f:
                    f.write(soup.prettify())

        elif command == "modify":
            box_selector = sys.argv[2]
            title = sys.argv[3]
            description = sys.argv[4]
            button_link = sys.argv[5]
            button_text = sys.argv[6]

            soup = parse_webpage()
            if soup:
                # Example usage to modify an existing box
                modify_box(
                    soup,
                    box_selector=box_selector,
                    title=title,
                    description=description,
                    button_link=button_link,
                    button_text=button_text
                )

                # Save the modified soup back to the local file
                with open("modified_IndexOfGames.html", "w", encoding="utf-8") as f:
                    f.write(soup.prettify())
