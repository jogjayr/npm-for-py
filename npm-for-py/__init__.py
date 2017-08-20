import sys
print sys.path
import requests

response = requests.get('https://google.com')

print response.status_code

