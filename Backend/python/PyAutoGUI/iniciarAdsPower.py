import pyautogui
from dotenv import load_dotenv
import os

load_dotenv()  # Carrega as variáveis do .env para o ambiente

# Variáveis de ambiente
email = os.getenv('EMAIL')
senha = os.getenv('SENHA')


#Abrir o App
pyautogui.hotkey('win')
pyautogui.typewrite('AdsPower Browser', interval=0.2)
pyautogui.hotkey('enter')
pyautogui.sleep(6)  # Esperar o aplicativo abrir

#colocar email e senha
pyautogui.moveTo(1395, 288, duration=3)
pyautogui.click(button='left')
pyautogui.typewrite(email, interval=0.2)
pyautogui.hotkey('tab')
pyautogui.typewrite(senha, interval=0.2)

#Pressionar button de login
pyautogui.moveTo(1422, 505, duration=3)
pyautogui.click(button='left')
pyautogui.FAILSAFE = True