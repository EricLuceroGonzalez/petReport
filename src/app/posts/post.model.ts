// export: para poder ser usada como un import en otras clases
// interface: es como una clase que permite ser implementada en varias clases sin necesiadad de heredar
export interface Post {
  id: string; // We add id at Using Angular HTTP client module
  title: string;
  content: string;
  location: string;
  creator: string;
}

// No variable name, just the type!!
