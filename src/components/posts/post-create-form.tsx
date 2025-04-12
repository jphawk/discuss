'use client';
import { useActionState } from "react";
import { Input, Button, Textarea, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import * as actions from '@/actions';
import FormButton from "../common/form-button";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action, isPending ] = useActionState(actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input 
              isInvalid={!!formState.errors.title} 
              errorMessage={formState.errors.title?.join(', ')}
              name="title" 
              label="title" 
              labelPlacement="outside" 
              placeholder="Post title" 
            />
            <Textarea 
              isInvalid={!!formState.errors.content} 
              errorMessage={formState.errors.content?.join(', ')}
              name="content" 
              label="content" 
              labelPlacement="outside" 
              placeholder="Post content" 
            />
            {
              formState.errors._form ? 
              <div className="rounded p-2 bg-red-200 border border-red-400">{formState.errors._form.join(', ')}</div> 
              : null
            }
            <FormButton isLoading={isPending}>Create post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
