package cogent.infotech.com.service;

import cogent.infotech.com.entity.Item;
import cogent.infotech.com.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item save(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> fetchItems() {
        return (List<Item>) itemRepository.findAll();
    }

    @Override
    public void delete(Integer id) {
        itemRepository.deleteById(id);
    }

    @Override
    public Optional<Item> fetchItem(Integer id) {
        return itemRepository.findById(id);
    }

    @Override
    public String updateItem(Integer id, Item item) {
        Optional<Item> optionalItem = fetchItem(id);
        if(optionalItem.isPresent()) {
            Item updatedItem = optionalItem.get();
            updatedItem.setItemName(item.getItemName());
            updatedItem.setItemPrice(item.getItemPrice());
            updatedItem.setItemQty(item.getItemQty());
            itemRepository.save(updatedItem);
            return "Item with ID#"+id+" updated!";
        }
        return "Item with ID#"+id+" cannot be found.";
    }
}
