package org.wtmp.darktimes.api.security;

import java.util.UUID;

public interface TokenService {
    Token createToken();

    void removeToken(Token token);

    Token getTokenById(UUID id);
}
