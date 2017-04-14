package cocktail.ng.individus;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface IndividuRestRepository extends MongoRepository<Individu, String> {
}
