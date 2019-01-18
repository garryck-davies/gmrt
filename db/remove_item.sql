delete from cart
where item_id = $1;

select * from cart
join items on items.item_id = cart.item_id;