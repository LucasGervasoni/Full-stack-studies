# 📌 PyAutoGUI – Guia Rápido (Cheat Sheet)

O **PyAutoGUI** é uma biblioteca Python multiplataforma (Windows, Mac, Linux) para automação da interface gráfica (GUI).  
Com ela, você pode controlar o **mouse**, o **teclado** e usar **reconhecimento de imagem** para automatizar tarefas.

---

## 🚀 Instalação

```bash
pip install pyautogui
```

## ⚙️ Funções Gerais

```python
pyautogui.position()      # Posição atual do mouse (x, y)
pyautogui.size()          # Tamanho da tela (largura, altura)
pyautogui.onScreen(x, y)  # Verifica se x e y estão na tela
```

## ⛑️ Segurança (Fail-Safe)

```python
pyautogui.PAUSE = 2.5      # Pausa entre comandos
pyautogui.FAILSAFE = True  # Mova o mouse para o canto superior esquerdo para parar o script
```

## 🖱️ Mouse

#### Movimentar:
```python
pyautogui.moveTo(x, y, duration=1)
pyautogui.moveRel(x, y, duration=1)
pyautogui.dragTo(x, y, duration=1)
pyautogui.dragRel(x, y, duration=1)
```
#### Clicar:
```python
pyautogui.click(x=100, y=200, clicks=2, interval=0.25, button='left')
pyautogui.rightClick()
pyautogui.middleClick()
pyautogui.doubleClick()
pyautogui.tripleClick()
```
#### Scroll:
```python
pyautogui.scroll(500)     # Para cima
pyautogui.scroll(-500)    # Para baixo
```
#### Pressionar/soltar botão:
```python
pyautogui.mouseDown()
pyautogui.mouseUp()
```

## ⌨️ Teclado

#### Digitar texto:
```python
pyautogui.typewrite('Olá mundo!\n', interval=0.1)
```
#### Lista de teclas:
```python
pyautogui.typewrite(['a', 'b', 'enter', 'left', 'backspace'])
```
#### Atalhos:
```python
pyautogui.hotkey('ctrl', 'c')  # Copiar
pyautogui.hotkey('ctrl', 'v')  # Colar
```
#### Pressionar/soltar tecla:
```python
pyautogui.keyDown('shift')
pyautogui.keyUp('shift')
```

## 📦 Caixas de Mensagem

#### Digitar texto:
```python
pyautogui.alert('Mensagem simples.')
pyautogui.confirm('Deseja continuar?')
pyautogui.prompt('Digite algo:')
```

## 📸 Captura de Tela e Reconhecimento de Imagem

#### Capturar:
```python
pyautogui.screenshot()
pyautogui.screenshot('foto.png')
```

#### Encontrar imagem na tela:
```python
pyautogui.locateOnScreen('imagem.png')
pyautogui.locateCenterOnScreen('imagem.png')
list(pyautogui.locateAllOnScreen('imagem.png'))
```
