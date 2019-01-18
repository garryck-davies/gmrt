create table cart(
cart_id serial primary key,
item_id integer references items(item_id)
)