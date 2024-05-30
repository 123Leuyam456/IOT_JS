import network   #import des fonction lier au wifi
import urequests #import des fonction lier au requetes http
import utime #import des fonction lier au temps
import ujson #import des fonction lier aà la convertion en Json
from machine import Pin, PWM # importe dans le code la lib qui permet de gerer les Pin de sortie et de modulation du signal
import time # importe dans le code la lib qui permet de gerer le temps

wlan = network.WLAN(network.STA_IF) # met la raspi en mode client wifi
wlan.active(True) # active le mode client wifi

ssid = 'Nuage'
password = '22222222'
wlan.connect(ssid, password) # connecte la raspi au réseau
url = "http://192.168.177.37:3000/tutu"

maison = {
    "Gryffindor" : [255,0,0],
    "Slytherin" : [0,255,0],
    "Hufflepuff" : [200,200,0],
    "Ravenclaw" : [0,0,255]
}

led =[PWM(Pin(14,mode=Pin.OUT)), PWM(Pin(13,mode=Pin.OUT)),PWM(Pin(12,mode=Pin.OUT))]

while not wlan.isconnected():
    print("pas co")
    utime.sleep(1)
    pass

def recupMaison():
    try:
        print("GET")
        r = urequests.get(url) # lance une requete sur l'url
        print('oui')
        house = r.json()['message']
        r.close() # ferme la demande
        utime.sleep(1)
        print(house)
        return house
    except Exception as e:
        print(e)


def couleurs(tableau):
    c = 0
    for i in led:
        i.freq(1_000)
        i.duty_u16(tableau[c]*256)
        c += 1
        



while True:
    house = recupMaison()
    if not house:
        house = "Gryffindor"
        couleurs([255, 255, 255])
    else:
        couleurs(maison[house])