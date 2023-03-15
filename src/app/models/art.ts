export class Art{
  id: string;
  ownerName: string;
  artName: string;
  image: string;
  prepare(input: any){
    Object.assign(this, input);
    return this;
  }
}
