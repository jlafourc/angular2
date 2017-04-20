package cocktail.ng.individus;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RestResource;

public interface IndividuRestRepository extends MongoRepository<Individu, String> {
}
