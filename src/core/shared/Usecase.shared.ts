export default interface UseCase<E, S> {
    execute(entr: E): Promise<S>;
}