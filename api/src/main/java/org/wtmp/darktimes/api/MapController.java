package org.wtmp.darktimes.api;

import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wtmp.darktimes.game.map.TileMapRender;

@RestController
public class MapController {
    @Resource
    TileMapRender tileMapRender;

    @GetMapping("/{token}")
    public String getSectorByXY(@PathVariable int token) {
        return tileMapRender.renderViewport(30, 30, 13, 13);
    }

}
