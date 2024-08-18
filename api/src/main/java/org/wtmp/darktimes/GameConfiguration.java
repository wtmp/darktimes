package org.wtmp.darktimes;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;

import javax.net.ssl.SSLException;
import java.io.File;

@Configuration
public class GameConfiguration extends AbstractMongoClientConfiguration {
    @Value("${mongo.dbname}")
    protected String dbname;

    @Value("${mongo.uri}")
    protected String uri;

    @Override
    protected String getDatabaseName() {
        return dbname;
    }

    @Bean
    public MongoClient mongoClient() {
        return MongoClients.create(uri);
    }

    @Bean
    public MongoDatabase mongoDatabase(MongoClient mongoClient) {
        return mongoClient.getDatabase(getDatabaseName());
    }

    @Bean
    public MongoTemplate mongoTemplate(MongoClient mongoClient) {
        return new MongoTemplate(mongoClient, getDatabaseName());
    }

    @Bean
    public SslContext sslContext() {
        try {
            File keyCertChainFile = new File("./assets/ssl/ssl.crt");
            File keyFile = new File("./assets/ssl/ssl.key");

            return SslContextBuilder
                    .forServer(keyCertChainFile, keyFile)
                    .build();
        } catch (SSLException e) {
            throw new RuntimeException(e);
        }
    }
}
