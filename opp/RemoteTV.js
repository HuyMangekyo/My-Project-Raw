class TV{
    constructor(channel,volume) {
        this.channel = channel;
        this.volume = volume;
        this.status = false;
    }
    setChannelTV(Channel){
        this.channel = Channel;
    }
    increaseVolumeTV(){
        this.volume+=1;
    }
    decreaseVolumeTV(){
        this.volume-=1;
    }
}
class Remote{
    constructor(code) {
        this.name = code;

    };
    setStatus(status){

        this.name.status =status;


    }
    setChannel(Channel){
        if (this.name.status === true){
            this.name.setChannelTV(Channel) ;
            alert("kenh hien tai "+this.name.channel)
        }
    };
    increaseVolume(vol){
        if (this.name.status === true) {
            for (var i = 1; i <= vol; i++) {
                this.name.increaseVolumeTV()
                alert("volume= "+this.name.volume)
            }
        }
    }
    decreaseVolume(vol){
        if (this.name.status == true) {
            for (let i = vol; i >= 1; i--) {
                this.name.decreaseVolumeTV()
                alert("volume= "+this.name.volume)
            }
        }
    }
}

let SamSung = new TV(2,30);
let remoteSS = new Remote(SamSung)
remoteSS.setStatus(true)
remoteSS.setChannel(7)
remoteSS.setChannel(3)
remoteSS.increaseVolume(2)
remoteSS.setStatus(false)



