package org.thingsboard.server.common.data;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

@Data
@Schema
public class TbTenantLogo {
    private String url;

    public TbTenantLogo(String url) {
        this.url = url;
    }
}
