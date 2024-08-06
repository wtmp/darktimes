package org.wtmp.darktimes.game.creature;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class InMemoryCreatureDefinitionRepository implements CreatureDefinitionRepository {
//    @Resource
//    IconRepository iconRepository;

    private Map<String, CreatureDefinition> definitions = new HashMap<>();

    @Override
    public void addDefinition(CreatureDefinition creatureDefinition) {
        definitions.put(creatureDefinition.getShortname(), creatureDefinition);
    }

    @Override
    public CreatureDefinition getDefinition(String name) {
        return definitions.get(name);
    }

    @PostConstruct
    private void onPostConstruct() {
        CreatureDefinition definition = CreatureDefinition.builder()
                .shortname("rat")
                .description("серая крыса")
                .health(2)
                .attack(3)
                .defence(0)
//                .icon()
                .build();

        definitions.put(definition.getShortname(), definition);

        definition = CreatureDefinition.builder()
                .shortname("bat")
                .description("летучая мышь")
                .health(2)
                .attack(3)
                .defence(0)
//                .icon(iconRepository.findByCode(88))
                .build();

        definitions.put(definition.getShortname(), definition);

        definition = CreatureDefinition.builder()
                .shortname("man")
                .description("человек")
                .health(10)
                .attack(2)
                .defence(10)
//                .icon(iconRepository.findByCode(67))
                .build();

        definitions.put(definition.getShortname(), definition);
    }
}
