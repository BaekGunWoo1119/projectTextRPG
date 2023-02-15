###모듈 설치 명령어
# python -m pip install oauth2client
# python -m pip install gspread
# python -m pip install --upgrade pip

from oauth2client.service_account import ServiceAccountCredentials
import gspread

scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive",
]

json_key_path = "../META-INF/api_key.json"	# JSON Key File Path

credential = ServiceAccountCredentials.from_json_keyfile_name(json_key_path, scope)
gc = gspread.authorize(credential)

# URL로 열기
docx_url = "https://docs.google.com/spreadsheets/d/18n328MQoyReTNKuvvs_3YgLO-JW-bGWodQcKZen63LA/edit#gid=0"
doc = gc.open_by_url(docx_url)

from docx.enum.text import WD_ALIGN_PARAGRAPH
templ = docx.Document('/storyboard/story.docx')
for x, paragraph in enumerate(templ.paragraphs):
    print(str(x) + " : " + paragraph.text)