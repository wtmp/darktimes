package org.wtmp.darktimes.utils;

import org.telegram.telegrambots.meta.api.objects.replykeyboard.buttons.InlineKeyboardButton;

import java.util.ArrayList;
import java.util.List;

public class InlineMarkupBuilderUtils {
    private List<List<InlineKeyboardButton>> markup = new ArrayList<>();
    private List<InlineKeyboardButton> buttons = new ArrayList<>();

    public InlineMarkupBuilderUtils add(String name, String value) {
        buttons.add(
                InlineKeyboardButton
                        .builder()
                        .text(name)
                        .callbackData(value)
                        .build()
        );
        return this;
    }

    public InlineMarkupBuilderUtils end() {
        markup.add(buttons);
        buttons = new ArrayList<>();
        return this;
    }

    public List<List<InlineKeyboardButton>> build() {
        return markup;
    }
}
