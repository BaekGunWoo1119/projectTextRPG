pip install oauth2client
pip install gspread

from oauth2client.service_account import ServiceAccountCredentials
import gspread

scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive",
]

json_key_path = "../META-INF/api_key.json"	# JSON Key File Path

credential = ServiceAccountCredentials.from_json_keyfile_name(json_key_path, scope)
gc = gspread.authorize(credential)

import docx
from docx.shared import Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH
templ = docx.Document('/storyboard/story.docx')
for x, paragraph in enumerate(templ.paragraphs):
    print(str(x) + " : " + paragraph.text)