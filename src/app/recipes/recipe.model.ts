export class Recipe {
  private readonly id: number;
  private readonly name: string;
  private readonly shortDescription: string;
  private readonly instructions: string[];
  private readonly thumbnailImgPath: string;
  private readonly mainImgPath: string;

  constructor(id: number, name: string, shortDesc: string, instructions: string[], thumbnailImgPath: string, mainImgPath: string) {
    this.name = name;
    this.shortDescription = shortDesc;
    this.instructions = instructions;
    this.thumbnailImgPath = thumbnailImgPath;
    this.mainImgPath = mainImgPath;
  }


  getName(): string {
    return this.name;
  }

  getShortDescription(): string {
    return this.shortDescription;
  }

  getInstructions(): string[] {
    return this.instructions;
  }

  getThumbnailImgPath(): string {
    return this.thumbnailImgPath;
  }

  getMainImgPath(): string {
    return this.mainImgPath;
  }
}
