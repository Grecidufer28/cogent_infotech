package cogent.infotech.com.service;

import cogent.infotech.com.entity.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {

    public Item save(Item item);
    public List<Item> fetchItems();
    public void delete(Integer id);
    public Optional<Item> fetchItem(Integer id);
    public String updateItem(Integer id, Item item);
}
