package org.wtmp.darktimes.repository;

import org.wtmp.darktimes.game.Dungeon;
import org.wtmp.darktimes.utils.DungeonUtils;

import java.util.HashSet;
import java.util.Set;

public class DungeonRepository {
    private Set<Dungeon> dungeons = new HashSet<>();

    public DungeonRepository() {
        dungeons.add(new DungeonUtils(0, 0, "Дом Виталя")
                .addUp("\uD83C\uDFFA Храм", "<code>Вы стоите перед входом в таинственную комнату, " +
                        "где в полумраке возвышается древний идол. Его мощная фигура, вырезанная из камня, " +
                        "окутана загадочной аурой и хранит в себе тайны тысячелетий. На камне вы замечаете " +
                        "выгравированную, едва разборчивую, надпись: Ве`_кий Ви~25`ль-. Что бы это значило?</code>")
                .moveUp()
                .addRight("\uD83D\uDD70 Сигарная Комната", "<code>Вы стоите на пороге " +
                        "сигарной комнаты, где вас окружает атмосфера роскоши и комфорта. " +
                        "Тёплое дерево, приглушённое освещение и мягкие кожаные кресла создают " +
                        "идеальное место для наслаждения ароматными сигарами и спокойных разговоров.</code>")
                .addLeft("\uD83C\uDF78 Комната Отдыха", "<code>Вы стоите на пороге комнаты отдыха, где царит атмосфера " +
                        "уюта и спокойствия. Мягкий свет настольных ламп и приглушённые оттенки стен создают " +
                        "ощущение умиротворения. Удобные кресла и диваны расположены вокруг журнальных столиков, " +
                        "приглашая расслабиться и забыть о заботах.</code>")
                .addUp("\uD83C\uDF7A Бар", "<code>Вы стоите на пороге бара, где царит " +
                        "яркий аромат смешанных напитков и приглушённый гул разговоров. Мягкое освещение и " +
                        "элегантный интерьер создают атмосферу уединения и расслабления. По стенам висят плакаты " +
                        "с коктейлями, а на полках выстроены разнообразные алкогольные напитки.</code>")
                .build());
    }
}
