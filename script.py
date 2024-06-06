import json
import re

def load_data_from_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def save_data_to_json(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

def fix_dataset(data):
    for book in data:
        if 'genres' in book:
            book['genres'] = eval(book['genres'])
        if 'characters' in book:
            book['characters'] = eval(book['characters'])
        if 'awards' in book:
            book['awards'] = eval(book['awards'])
        if 'ratingsByStars' in book:
            book['ratingsByStars'] = eval(book['ratingsByStars'])
        if 'setting' in book:
            book['setting'] = eval(book['setting'])
        if 'author' in book:
            authors = book['author'].split(', ')
            book['author'] = [author.strip() for author in authors]
        if 'bookId' in book:
            book['_id'] = book.pop('bookId')
    return data

def main(input_file_path, output_file_path):
    data = load_data_from_json(input_file_path)
    fixed_data = fix_dataset(data)
    save_data_to_json(fixed_data, output_file_path)

if __name__ == "__main__":
    input_file_path = 'dataset.json'  # path to your input JSON file
    output_file_path = 'livros.json'  # path to your output JSON file
    main(input_file_path, output_file_path)
