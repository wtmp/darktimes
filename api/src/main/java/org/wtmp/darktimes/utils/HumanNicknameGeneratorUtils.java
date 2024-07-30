package org.wtmp.darktimes.utils;

import java.util.Random;
import java.util.Set;

/**
 * Generates nicknames for humans
 */
public class HumanNicknameGeneratorUtils {
    public enum Type {
        MALE, FEMALE
    }

    public static String generate(Type type) {
        Random random = new Random();

        int before = random.nextInt(0, beforeMale.size() - 1);
        int after = random.nextInt(0, male.size() - 1);

        StringBuilder builder = new StringBuilder();

        if(type == Type.MALE) {
            builder
                    .append(beforeMale.stream()
                            .skip(before)
                            .findFirst()
                            .get())
                    .append(" ")
                    .append(male.stream()
                            .skip(after)
                            .findFirst()
                            .get());
        } else if (type == Type.FEMALE) {
            builder
                    .append(beforeFemale.stream()
                            .skip(before)
                            .findFirst()
                            .get())
                    .append(" ")
                    .append(female.stream()
                            .skip(after)
                            .findFirst()
                            .get());
        }

        return builder.toString();
    }

    private static Set<String> beforeMale = Set.of(
            "Ужасный", "Злой", "Наглый", "Улыбчивый", "Добродушный", "Радостный"
    );


    private static Set<String> male = Set.of(
            "Liam", "Noah", "Oliver", "James", "William", "Henry", "Lucas",
            "Theodore", "Mateo", "Daniel", "Jack", "Michael", "Alexander",
            "Asher", "Samuel"
    );

    private static Set<String> beforeFemale = Set.of(
            "Ужасная", "Злая", "Наглая", "Улыбчивая", "Добродушная", "Радостная"
    );

    private static Set<String> female = Set.of(
            "Olivia", "Emma", "Charlotte", "Amelia", "Sophia", "Mia",
            "Isabella", "Ava", "Evelyn", "Luna", "Harper", "Sofia", "Camila",
            "Eleanor", "Elizabeth", "Violet", "Scarlett", "Emily", "Hazel", "Aria",
            "Nora", "Chloe", "Ellie", "Mila"
    );
}
