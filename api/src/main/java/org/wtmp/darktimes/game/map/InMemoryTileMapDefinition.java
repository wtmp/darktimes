package org.wtmp.darktimes.game.map;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class InMemoryTileMapDefinition implements TileMapDefinitionRepository {
    protected Map<String, TileMapDefinition> definitions = new HashMap<>();

    @Override
    public void addDefinition(TileMapDefinition tileMapDefinition) {
        definitions.put(tileMapDefinition.getShortname(), tileMapDefinition);
    }

    @Override
    public TileMapDefinition getDefinition(String shortname) {
        return definitions.get(shortname);
    }

    @PostConstruct
    private void onPostConstruct() {
        TileMapDefinition definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(47))
                .description("Бездна")
                .shortname("black_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(51))
                .description("Земля")
                .shortname("brown_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(1))
                .description("Дерево")
                .shortname("tree_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(2))
                .description("Елка")
                .shortname("fir_tree_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(52))
                .description("Снег")
                .shortname("white_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(53))
                .description("Джунгли")
                .shortname("jungle_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(49))
                .description("Пустыня")
                .shortname("yellow_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(50))
                .description("Вода")
                .shortname("blue_tile")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(11))
                .description("Гора")
                .shortname("mountain")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(10))
                .description("Снежная гора")
                .shortname("snow_mountain")
                .build();
        definitions.put(definition.getShortname(), definition);

        definition = TileMapDefinition.builder()
//                .icon(iconRepository.findByCode(5))
                .description("Трава")
                .shortname("grass_tile")
                .build();
        definitions.put(definition.getShortname(), definition);
    }
}
