
input.onButtonPressed(Button.A, function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.SmallSquare)
        let wcString = ESP8266_IoT.getWorldClock()
        basic.showString(wcString)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})

input.onButtonPressed(Button.B, function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.SmallSquare)
        ESP8266_IoT.getWorldClockCall()
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

serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString("REC:")
    let serialString = serial.readLine()
    basic.showString(serialString)
    basic.showString("END")
})
