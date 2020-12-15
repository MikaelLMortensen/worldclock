
input.onButtonPressed(Button.B, function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.SmallSquare)
        let timeString = ESP8266_IoT.getTime()
        let jsonStart = timeString.indexOf("{")
        let jsonEnd = timeString.indexOf("}")

        if (jsonStart > 0) {
            timeString = timeString.substr(jsonStart,jsonEnd)
            basic.showString(timeString)
        }
        else
        {
            basic.showString(timeString.length.toString())
            basic.showIcon(IconNames.Sad)
        }

    } else {
        basic.showIcon(IconNames.No)
    }
})

basic.showIcon(IconNames.SmallSquare)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("", "")
basic.showIcon(IconNames.Square)
 if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Yes)
 }


basic.forever(function () {
	
})
serial.onDataReceived("{", function () {
    basic.showString("REC:")
    let serialString = serial.readUntil("}")
    basic.showString(serialString)
    basic.showString("END")
})
