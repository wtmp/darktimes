package org.wtmp.darktimes.telegram;

import org.telegram.telegrambots.bots.DefaultAbsSender;

import java.io.Writer;

public interface ChatResponse {
    Writer getWriter();
    void execute(DefaultAbsSender sender, RequestLimiter requestLimiter);
}
