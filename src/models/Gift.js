
export class Gift {
constructor(data){
  this.id = data.id
  this.opened = data.opened || false
  this.url = data.url
  this.tag = data.tag || "tag goes here :)"
}
}