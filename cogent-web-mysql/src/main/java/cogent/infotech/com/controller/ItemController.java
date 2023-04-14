package cogent.infotech.com.controller;

import cogent.infotech.com.entity.Item;
import cogent.infotech.com.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping("/items")
    public Item add(@Validated @RequestBody Item item) {
        return itemService.save(item);
    }

    @GetMapping("/items")
    public List<Item> fetchItemList() {
        return itemService.fetchItems();
    }

    @DeleteMapping("/items/{id}")
    public void delete(@PathVariable Integer id) {
        itemService.delete(id);
    }

    @GetMapping("/items/{id}")
    public Optional<Item> fetchItem(@PathVariable Integer id) {
        return itemService.fetchItem(id);
    }

    @PutMapping("/items/{id}")
    public String updateItem(@PathVariable Integer id, @Validated @RequestBody Item item) {
        return  itemService.updateItem(id, item);
    }

}
