package org.wtmp.darktimes.api.security;

import jakarta.annotation.Resource;
import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.*;

@Log
@RestController
@RequestMapping(path = "/auth")
public class TokenController {
    @GetMapping("/login")
    public String registerToken(@RequestParam("name") String id, @RequestParam("password") String hash) {
        return "token was registered.";
    }
}
