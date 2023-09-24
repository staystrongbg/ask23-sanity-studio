export const ALL_PRODUCTS_QUERY = `*[_type == "product"]{
    "id":id.current,
    "tip": tip[][0]->name,
    "name": name, 
    "price": cena,
    "detail": details,
    "image": image.asset->url,
    "novo": novo,
    "akcija": akcija,
    "title": title[][0]->name,
    "link": link[][0]->slug,
  }`;

export const AKCIJA_QUERY = `*[_type == "product" && akcija == true]{
    "id":id.current,
    "tip": tip[][0]->name,
    "name": name, 
    "price": cena,
    "detail": details,
    "image": image.asset->url,
    "novo": novo,
    "akcija": akcija,
    "title": title[][0]->name,
    "link": link[][0]->slug,}`;

export const url_products_query = (url: string) => {
  return `*[_type == "product" && link[][0]->slug == "${url}"]{
        "id":id.current,
        "tip": tip[][0]->name,
        "name": name,
        "price": cena,
        "detail": details,  
        "image": image.asset->url,
        "novo": novo,
        "akcija": akcija,
        "title": title[][0]->name,
        "link": link[][0]->slug,
        }`;
};

export const signle_product_query = ({
  id,
  url,
}: {
  id: string;
  url: string;
}) => {
  return `*[_type == "product" && defined(link[][0]->slug == "${url}") && defined(id.current == "${id}" )]{
        "id":id.current,
        "tip": tip[][0]->name,
        "name": name,
        "price": cena,
        "detail": details,  
        "image": image.asset->url,
        "novo": novo,
        "akcija": akcija,
        "title": title[][0]->name,
        "link": link[][0]->slug,
        
        }`;
};
