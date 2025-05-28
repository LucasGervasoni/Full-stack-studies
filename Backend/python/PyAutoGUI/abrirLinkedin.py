import pyautogui

#abrir navegador
pyautogui.click(760,1042)
pyautogui.sleep(4)

#abrir linkedin
pyautogui.moveTo(529, 112, duration=2)
pyautogui.sleep(1)
pyautogui.middleClick()
pyautogui.sleep(2)
pyautogui.moveTo(435, 15, duration=2)
pyautogui.click()

pyautogui.FAILSAFE = True