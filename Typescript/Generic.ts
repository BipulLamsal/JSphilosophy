function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(getRandomNumber(numbers));

// making type generic

//array of type T
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let randomGenreicNum = getRandomElement<number>(numbers);
//can also use TS compilre itself identify the type of array i used.
randomGenreicNum = getRandomElement(numbers);

interface authorObjType {
  id: number;
  username: string;
}

interface categoryObjType {
  id?: number;
  title: string;
}

interface postObjType {
  id: number;
  title: string;
  desc: string;
  extra: categoryObjType[] | authorObjType[];
}
//use ; or , does not matter.
// using generic for the data type extra which might be among the category and authorobj

interface newPostObjType<T> {
  id: number;
  title: string;
  desc: string;
  extra?: T[];
}


const newPost: newPostObjType<categoryObjType> = {
  id: 1,
  title: "New post",
  desc: "this is the descritption",
  extra: [{ id: 1, title: "Random" }],
};


    
