import axios from "./config";

export const getPets = async (userId: number, text: string) => {
  const pets = await axios.get(`/user/${userId}/pets/`);
  return pets.data;
}

export const getPetsFavorite = async (userId: string) => {
  const pets = await axios.get(`/user/${userId}/pets/favorites/`);
  return pets.data;
}

export const getPetAndUser = async ( id: string ) => {
    return {
        "donor": {
          "name": "João da Silva",
          "address": "Rua dos Exemplos, 123",
          "cityState": "São Paulo/SP",
          "email": "joao@example.com",
          "phone": "(11) 98765-4321"
        },
        "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsA4gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECBAUGAwj/xAA3EAABAwIEBAQEBQQCAwAAAAABAAIDBBEFEiExBhNBUSJhcYEHFDKhFZGxwfAjQlJiktEkM3L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgMBBAUG/8QAKREAAgIBBAEDAgcAAAAAAAAAAAECAxEEEiExBSJBURMyFBUzNGGBwf/aAAwDAQACEQMRAD8A3iIi9CeHCIiAIiIAiIgCIiAIiIAiIgCoShKoUMZKJ1ssOvxOkw9t6qUM8up9B1XPzcVzTy5KCna1h0a+TUn26KE7YQ7ZfTpbbvtR1lksuRilqqmIuqp5Xu3tmtZameatpXvkirJmdrPNitf8bH4N78osx9yJDc5jPqcB6lVBB2IKi6pxLEZo8s1Q91x2sfsvbhnEqunrQ2aqdyyRdkjt/QqUdXBvGCEvFXqDeUSZZUsselxCmqBYSMDuxcsy35d1sqSfRz5QlF4ksFiK/KlllkC0AqqrZFgkiiKqogCIiAIiIAiIgCIiAIiIAiIgCFFRxQFFg4tilPhdI+oqD9I8LRu49AFzfFvEWI4fNyKZrYWkaPtdx9OgUeVtbNVOMk8r5HbZnm61btSoNxXZ0dJ46VyU2+Db1OJVGL1zp5iXOJNgNmjsFvsKhYGty/VYXuuVwYhziXEW811NJOyFzRuBvbdcyUm3yejhXGCwjdSxOZT5xbUWsPLqtNWFrtLXJ6kbLoMRlFNgecktklc4A9AwfvcfzVcjLKHN0OltB0USzBhV0wYCAwG3W9lh00zZX3Y4B3+J3VmJPIabmwvstPnIdoUMYOyoKmWSzWTWe3oRuP8AtbzDeIJYJeS+VwsbWeQ4e/ULgMIr+TU/1HHK7W/Yrcl9NVSGV7skzfCT3tsrK7JQeUU3URug4yJcgkE0TXjYi69FyfB+LxviFG54ErT9BO/mF1o1F73XZjJSipI8jZXKqbhLtFpVCr7KhCyQLEVyosgtREQBERAEREAREQBERAEREAVkjg0XOy9FhYk5zYdBck2aO5WV2Rk8I4Xjeolq8VpqWjp+bK4ENG+a/Sy5jiWjfQzw08ssb5gwmQRnRmu2mi6/iqobg9C2pjua2qJYx+xZGPqI/wDo6ey4auc+oMcsgBe5v5rk6rG9nqPGp/Qjjo2/D9G91FJO27supbbVeTK9r6prM+Qhx0d4fv0XlQYw7D6R9Ny9HanKtXVz/M1wkYLOe4XA7rRi5bmmuDrNQ2Jp8ne/EHEX0lDheHNtc0zZZHD/AG1AC1FHTVP4YaqRgtcGx3/nksbjqaV+M0hqG6R0NNoRYkZAf3V9VxNG6BzIY32LbZQbdFixzWNpKtV4bkzT4rLeQAbLWk6rYTytlja6eAtzi7DmIv5jTVevDdB+IY7SQOB5IfzJTb6WN8Tj+QVy5KJNJNl+N0sVLMyghbaogY3nP6veWgnXyJstawSxy5JA4HS91tsRqmycQV0rm6vkzNB9tP2WLDM2aZxe3MLWv2BSfZGrmKfyXx1T45Wyb2AHn6qQ+EOKDUD5aofmc3z8Vv39FGszr+F27ToetlmYBLLHicLmOLXtufa2oV+ntcJL4NXW6eF1Tz2idGkEXBuEKwsFqOfRAG+ZhsQeiziF1meXXKLbIqogweKIiyQCIiAIiIAiIgCIiAIiqgKa2WJUg3EgFy0HKOl1mgXVpAdNC3L4S8ZvTc/YFM4WTG3c8EYcdtNTjjKYuAhpoxGSfLe3nfMVzDnCoqm62bYgAdOwW64m5873Vrg60z3a/wCTiSf0/Vc40GLtfew6Li3fe8nsNIkqVgy2U8M0Ac2YseRZ8Y/uIPVOHsOnr8apoII855zRbputc5x5ml7k9FLXwjwP52qZI3NeEtffa2uqpZtGu+M+DPpMehla0Br6SJgFurW2sPy+6j+hgD3+MtbqPr2t/Ap/+L+HmuoKGoZG1wY8hxOnhHZQbX0R5pjpml0pPhawEl3oOqGC2eKipwTE8GQm9gbgLoeG4hR4FVYjIAHVh5MJ6iJmr3e5yj2K0sHB2NPaJamnioYSL8yumbCLejjf7La8UYhTNwyGjoJhJBTQtpGSt2kLfrePInMR5EKyvCeWa2qy4bF7nKSvM1RJUgaOlJPurmEtqC5v0ybeS8onExlg6qwPMcpAcRY9OihnJsJY4Myr/pxxud7LYcNQ56x9S8Exw2LiOmbTXy/7WrrS6XxCxaGgrN4exE0VUWm5ZKzlv06XVtTW9ZKdSpOqW0l/h0kNt0LGh3rqP2+63Jv2Wk4bY1meJpvEY2uhcTe7b6fkt85dk8ik1k89UV3siAx0RFkgEREAREQBERAEREAVVRVQFwCwsYq5aCglqqeATSMbbITa4Oht52KzWhJo2yQvjLQ4OFiCoT5TRZW9slIjfFZMIxFkMU34jRwwAtbH8sJR56hwJ1WqkwfAJGtEfExhtsJ8MmH3F1u54qSlramkrTG+jlPgkk2Y/bU9AQN+/qtDi+Cx0spbABbcakgjy1XGsTT9XZ6+hwdacOikPComkZLh2M4ZWx5rEB7onb/4vAup3wAYLwRw22Sqq4nTyNGcxAvc9x2a1o1Kh/gPDpcSxB9A+kMsYjLsxic0j0doVv8AhLgDDsaixP8AEsQrYpIq2WmpDDJ9AYNXG/1a6e3mq2XHQV/F+LcQQy0VJgIhpWuysZUjM9w7nUAegPuuSxEY1SxvighkpmnQ/LNFOD7tu4/8lfw3LUcI4/JheNVTH0Mhy01U8f03EbWvtfqOh7qU67BpKnCnCAtzPZdhYwetwiBAL6WsEhkkjia46uLm3JHmSSVp8diZBK1kZGR4L2gHYFdhX0sUFRI3Eq6ETgkGNr+dID2s3wt9yFyNY35mpfoX26HXQLDkZUWzXRvETL2u47eS8y3QvzqszA12gItu0qy92WWUR6PWCbLofZe8Dc2wsQdCFhtGl7bL3ppuW8PI8OxUjBL3BVW6WhpDILOjaWG2xB107a30XXXuo04Or3xtdE1zHAWIB0BBUi0kvOiB69r7Ls1S31pnktXX9LUSj8nsqKqoplBjoiKRAIiIAiIgCIiAIiIAqhUVQgL2pI0vYW3LQRa4KoFfezSd1gz7Ec8cuhpqN8VMAJQ7KSd1zWH49xBNHHEwsq4oxla2enY4WH+xF/utzxlLHUV7nAZH/wB+Zu37LnYnXLnyuDYGWzSyHNr2A6/kVytXLdYz0/jK9mmX8kwfCqKSGhxXGqyGkp4WDlj5cEW0u518xGgt2VuHcR0lAxn4LTZqZheWl3izFx1cT3K9uAZYa/4d4hTU9xeWRriRlJJYLFRFSYtW05FOyZzHQGzha22n6rUOkiRJuI6GCZ4xRrJWzOJfG9oLdTvb3UoYDXRVOGwtog0UwADAzQBvSy+X6zFKnE6nLLd7i7KGgbqeOBp+VhUFM4nM1rc7u2m26ew7OA+JeFRYZjNTU8yYRTOOURxhxGuvULoOBeDaY0LausjfzJW3tKOlutlt+KqKDiLGYIp2NNNAA53Q3BuLFdVRwtbCwM0s3QKrBY5EM/EngJ2GRPxOgN4Wi8rD0HceSjox5I819ey+n+JqX8VwSpoyBzCwhl+p7KA8XwB8cYuHNkjuHtA81ZErlyc2WkMbkvlcrJPDZvULNqYhFGzJ/b/da11gyeJ5I6qwibbBa+SJ7W5rAGwd2Cl7hKo59Hl8RsL5ndVB9LG50rAAdSFOvCdG2nwmJ19XDW3Vb+jb5Rw/LxXo+TcWRVsqLdONlGOiIpEAiIgCIiAIiIAiIgCqqKqAuar+isCuWDKI54+Zyaxjw0NbI43dbdcdODPkYCcovcW9F3/xPY+SnogwXAeb/ko+qc8LAARcrlapYsZ6fxcm9MsnZcHcTU2DCSgkflpauPK92tmWBs79f5ouax2kqZMQmkidG4PObPGb5vNa/meEvsMxZl/ZUw/EZ8OqDJG0Pa4Wc13VajOnBJv1dHvR0VayZjza4NwH6fdSTgOJvocPbHI4XAHhYb/dcVJjrqiIf+OIW76m/wCy9sDxFlW9seYjWwF7XUHJ4LpRrT9LySVhNZeB87jmeXAk97rrqWocIBmGttO6j/BzyqVzdb5hYu8jdZ0fEgpSXPbILOynQnTvoopkJI62ru+le+N2bKXZg3XRRJxLiTHVL/monxyHaWOxZL5jsfQruqXinDm1EjoKiJ0cw8TC4Axu8x0v36LlOKYsPnp5Kmnkdy8x5sJbm5Z6m24t391Yitkd18kcrC6KQPBPaxHqFro43OOgt5rMrGMhqNMrmu2cDcOC8zUMjbsSOxU0REIMbgcwuPNTxgDbYJSm4N2g3B3UBNdznZg22qmL4eYl83gYpnuHMgdlA/1W9opctHG8vBuMZr2/06xFaqLfONlGMiIpFIREQBERAFVUVQgKIqqiAIiogLwVW6tj1J9CgRcsz1ycn8SHtGDs/wAy8BqimZz3ODHHS+tlK/xCaDhTCRrnCimo+srl6z9Q9H4j9v8A2erHZpQdBZWyZBJc2DW627lebSeb7q2o+paR1Ss9RmYR3007LbcH4aa7EWvzvbkOmRaFoBkAPUgKXuFqeGnpITDGGlzdSNzqoy6JRWWdHT0TWRNve+y1OMYQycP5gyuN7OHRdGCeQPQfqvCoAdE++ttVWuCxkO4zh9Vh7nOmYcjdWyA3v7rCgxOpbkAleAD4T1Hv7n813PFQHyp8lHMri+dzXG4GwVq5KWW1EvMJA0BNy0dCvOGAyu0vp1VzgL7LKo9AbKaMFI4chtddx8Mq0Q4lUUr3ACSO7L9wuMP/ALG+q9aKV8GJ0ckTsrxO2x91dTPbNM1dZUraZRJ4ui10c0hjb4ug6Iu3hHjfqn//2Q==",
        "species": "Cachorro",
        "race": "Labrador Retriever",
        "carrying": "Grande",
        "sex": "Macho",
        "age": "3 anos",
        "measurements": {
            "height": "60 cm",
            "length": "90 cm",
            "width": "30 cm"
        },
        "weight": "25 kg"
      }
}

export const getUser = async () => {
  return {
    "name": "José da Silva",
    "email": "jose@gmail.com",
    "phone": "(83) 99999-9999",
    "dateOfBirth": "11/11/2000"
  }
}