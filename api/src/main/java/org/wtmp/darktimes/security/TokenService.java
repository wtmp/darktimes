package org.wtmp.darktimes.security;

import java.util.UUID;

public interface TokenService {
    Token createToken();

    void removeToken(Token token);

    Token getTokenById(UUID id);
}
