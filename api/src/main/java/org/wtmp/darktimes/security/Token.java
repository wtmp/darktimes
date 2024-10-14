package org.wtmp.darktimes.security;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
public class Token {
    long userId;
    long expireDate;
}
