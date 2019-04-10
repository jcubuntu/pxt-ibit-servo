/**
 * This Extension for contorl iBit board servo and motor at same time
 * By Pakpoom Eiamsouyngam
 */
enum ServoCH {
    //% block="Servo 1"
    Servo1 = 1,
    //% block="Servo 2"
    Servo2 = 2

}

//% weight=100 color=#0fbc11 icon=""
namespace iBitServo {

    /**
     * @param goDeg target servo angle as degree, eg:90
     */
    //% block="setServo CH:%ch|Angle:%goDeg"
    //% goDeg.min=1 goDeg.max=180
    export function setServo(ch: ServoCH, goDeg: number): void {
        let angle=0
        angle = Math.map(goDeg, 1, 180, 1000, 2000)
        if (ch == ServoCH.Servo1) {
            for (let i = 0; i < 2; i++) {
                pins.digitalWritePin(DigitalPin.P8, 1)
                control.waitMicros(goDeg)
                pins.digitalWritePin(DigitalPin.P8, 0)
                basic.pause(20)
                pins.digitalWritePin(DigitalPin.P8, 1)
                control.waitMicros(goDeg)
                pins.digitalWritePin(DigitalPin.P8, 0)
                basic.pause(20)
            }
        } else if (ch == ServoCH.Servo2) {
            for (let i = 0; i < 3; i++) {
                pins.digitalWritePin(DigitalPin.P12, 1)
                control.waitMicros(goDeg)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(20)
                pins.digitalWritePin(DigitalPin.P12, 1)
                control.waitMicros(goDeg)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(20)
            }
        }

    }

}
