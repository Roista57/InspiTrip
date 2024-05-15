import time
import os
import sys
import urllib.request
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
from tqdm import tqdm
from openai import OpenAI
import json
import requests
from bs4 import BeautifulSoup

client = OpenAI(
    # This is the default and can be omitted
    api_key='sk-proj-sREvm3SAVX1OhED6vEonT3BlbkFJr1II370dgYddqy9ft98o',
)

# WebDriver 설정 (Chrome 사용)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))


def get_influence_videos():
    influence = '@tzuyang6145'
    channel = 'https://www.youtube.com'

    # 원하는 웹 페이지 열기
    driver.get(f"{channel}/{influence}/videos")

    # Initialize the last position
    last_position = driver.execute_script("return window.pageYOffset;")

    while True:
        actions = driver.find_element(By.CSS_SELECTOR, 'body')
        actions.send_keys(Keys.END)
        time.sleep(1)

        current_position = driver.execute_script("return window.pageYOffset;")

        if current_position == last_position:
            break
        last_position = current_position

    # 스크롤 완료 후 요소 찾기
    elements = driver.find_elements(By.CSS_SELECTOR, '#video-title-link')

    with open(f"influence-{influence}.txt", "w", encoding='utf-8') as file:
        for element in tqdm(elements, desc="총 영상"):
            file.write(f"{element.get_attribute('title')} | {element.get_attribute('href')}\n")

    time.sleep(10)
    driver.quit()

def get_script(url):
    driver.get(url)
    time.sleep(5)
    more_button = driver.find_element(By.CSS_SELECTOR, '#expand')
    # 화면 중앙에 보이도록 스크롤
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", more_button)
    time.sleep(2)  # 화면이 재정렬될 시간 제공
    more_button.click()
    time.sleep(2)
    # "스크립트 표시" 버튼 찾기
    driver.find_element(By.XPATH, '/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-watch-metadata/div/div[4]/div[1]/div/ytd-text-inline-expander/div[2]/ytd-structured-description-content-renderer/div/ytd-video-description-transcript-section-renderer/div[3]/div/ytd-button-renderer/yt-button-shape/button').click()
    time.sleep(1)
    script_container = driver.find_element(By.TAG_NAME, 'ytd-transcript-renderer')
    elements = script_container.find_elements(By.TAG_NAME, 'yt-formatted-string')
    text = '\n'.join(element.text for element in elements)
    print(text)

    json_string = extract_store_details(text)
    print(json_string)

    data = json.loads(json_string)
    print(data)

    query = f"{data['address']} {data['title']}"
    print(f"{data['address']} {data['title']}")
    get_address(query)

    time.sleep(1)
    driver.quit()


def extract_store_details(text):
    prompt = f"아래의 영상의 스크립트에서 도로명 주소와 가게 이름을 {{ address : 추출한 도로명 주소, title: 추출한 가게 이름}} JSON 형식으로 답변해주세요.\n{text}\n"
    completion = client.chat.completions.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": prompt}])
    return completion.choices[0].message.content


def get_address(text):
    client_id = "W7BNIP_PLwywT8bdWutH"
    client_secret = "tl301N72in"
    encText = urllib.parse.quote(text)
    url = "https://openapi.naver.com/v1/search/blog?query=" + encText  # JSON 결과
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id", client_id)
    request.add_header("X-Naver-Client-Secret", client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()
    if (rescode == 200):
        response_body = response.read()
        data = json.loads(response_body.decode('utf-8'))
        items = data['items']
        for item in items:
            print(item['link'])
            driver.get(item['link'])
            time.sleep(1)
            try:
                iframe = driver.find_element(By.TAG_NAME, 'iframe')
                driver.switch_to.frame(iframe)

                # html_content = driver.execute_script("return document.documentElement.outerHTML;")
                # print(html_content)
                map_info = driver.find_element(By.CSS_SELECTOR, 'div.se-module.se-module-map-text > a')
                print(map_info.get_attribute('data-linkdata'))
            except NoSuchElementException:
                print("해당 요소를 찾을 수 없습니다.")
    else:
        print("Error Code:" + rescode)

url = f"https://www.youtube.com/watch?v=qYKCtBTpPNc"
get_script(url)
# text = '용산구 한강대로 덕순루'
# get_address(text)

